import supabase, { supabaseUrl } from './supabase'

export async function getCabins() {
  let { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be loaded')
  }

  return data
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  )

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  // Create Cabin
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }])

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be deleted')
  }

  //Upload Image
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)

  // Delete the cabin IF there was an error uploading the image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id)
    console.error(error)
    throw new Error(
      'Cabin image could not be uploaded and the cabin was not created'
    )
  }

  return data
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be deleted')
  }

  return data
}
