import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>

			<TopBar />

			<Container className=' mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					{/* Фильтрация */}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* Список товаров */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								items={[
									{
										id: 1,
										name: 'Пицца 1',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
										items: [
											{
												price: 300,
											},
										],
									},
									{
										id: 2,
										name: 'Пицца 1',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
										items: [
											{
												price: 300,
											},
										],
									},
									{
										id: 3,
										name: 'Пицца 1',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
										items: [
											{
												price: 300,
											},
										],
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Комбо'
								items={[
									{
										id: 1,
										name: 'Пицца 1',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
										items: [
											{
												price: 300,
											},
										],
									},
									{
										id: 2,
										name: 'Пицца 1',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
										items: [
											{
												price: 300,
											},
										],
									},
									{
										id: 3,
										name: 'Пицца 1',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
										items: [
											{
												price: 300,
											},
										],
									},
								]}
								categoryId={2}
							/>
						</div>

						{/* <div className='flex items-center gap-6 mt-12'>
						<Pagination pageCount={3} />
						<span className='text-sm text-gray-400'>5 из 65</span>
					</div> */}
					</div>
				</div>
			</Container>
		</>
	)
}
