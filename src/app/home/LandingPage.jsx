import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseDetails, setPriceId } from '../../redux/slices/mainSlice'

import PositioningGrid from '../../components/ui/layout/PositioningGrid'
import ProductCard from '../../components/retrieving/productCard/ProductCard'


export default function LandingPage() {
	const dispatch = useDispatch()
	const courseDetails = useSelector(state => state.course.courseDetails)
	const loading = useSelector(state => state.course.loading)

	useEffect(() => {
		dispatch(fetchCourseDetails(1))
	}, [dispatch])


	return (
		<PositioningGrid position='center'>
			<>
			{
				loading === true ? (
					<span>loading...</span>
				) : (
					<ProductCard courseDetails={courseDetails} />
				)
			}
			</>
		</PositioningGrid>
	)
}
