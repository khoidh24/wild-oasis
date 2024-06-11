import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins'

export function useDeleteCabin() {
  const queryClient = useQueryClient()

  const { isLoading: isRemoving, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success('Cabin successfully removed')

      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
    },
    onError: (err) => toast.error(err.message)
  })
  return { isRemoving, deleteCabin }
}
