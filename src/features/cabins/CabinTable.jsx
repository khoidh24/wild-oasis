import Spinner from '../../ui/Spinner'
import CabinRow from './CabinRow'
import { useLoadCabins } from './useLoadCabins'
import Table from '../../ui/Table'
import Menus from '../../ui/Menus'
import { useSearchParams } from 'react-router-dom'

const CabinTable = () => {
  const { isLoading, cabins } = useLoadCabins()
  const [searchParams] = useSearchParams()

  if (isLoading) return <Spinner />

  //FILTER
  const filterValue = searchParams.get('discount') || 'all'
  let filteredCabins
  if (filterValue === 'all') filteredCabins = cabins
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0)
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0)

  // SORT
  const sortValue = searchParams.get('sortBy') || 'startDate-asc'
  const [field, direction] = sortValue.split('-')
  const modifier = direction === 'asc' ? 1 : -1
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  )
  console.log([field, direction])

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  )
}

export default CabinTable
