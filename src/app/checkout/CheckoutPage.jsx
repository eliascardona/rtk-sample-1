import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { fetchCourseDetails, setPriceId } from '../../redux/slices/mainSlice'
import PositioningGrid from '../../components/ui/layout/PositioningGrid'


export default function LandingPage() {
	const dispatch = useDispatch()
	const stateLoad = useSelector(state => state.course)
	const courseDetails = useSelector(state => state.course.courseDetails)
	const [mmstring, setStringM] = useState("")
	const [mstring, setString] = useState("")

	useEffect(() => {
		console.log(JSON.stringify(stateLoad))
		setStringM(JSON.stringify(stateLoad))
		setString(JSON.stringify(courseDetails))
	}, [stateLoad])

	useEffect(() => {
		console.log(JSON.stringify(courseDetails))
		
	}, [])

	return (
		<PositioningGrid position='center'>
			<div style={{paddingTop:'2rem'}}>
			{
				mmstring.length > 0 ? (
					<>
						<h3>{mmstring}</h3>
						<h3>{mstring}</h3>
					</>
				) : (
					<h3>string</h3>
				)
			}
			{
				courseDetails && (
					<h3>
						{
							courseDetails?.title?.length > 1 ? `${courseDetails.title}` : "no title"
						}
					</h3>
				)
			}
			</div>
		</PositioningGrid>
	)
}
