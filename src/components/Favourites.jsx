import { Container, Row, Col, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

const Favourites = () => {
  const favouriteTray = useSelector((state) => state.favourites.companies)
  const dispatch = useDispatch()

  return (
    <Container>
      <h1> Favourite Jobs</h1>

      {favouriteTray.map((jobs) => (
        <Row>
          <Col xs={6}>
            <Link to={`/${jobs.company_name}`}>{jobs.company_name}</Link>
          </Col>
          <Col xs={6}>{jobs.title}</Col>
          <Col xs={6}>{jobs.category}</Col>
          <Col xs={6}>{jobs.job_type}</Col>
          <Col xs={6}>{jobs.candidate_required_location}</Col>

          <Button
            variant="danger"
            onClick={() => {
              dispatch({
                type: "REMOVE_COMPANIES",
                payload: jobs
              })
            }}
          >
            <FaTrash />
          </Button>
        </Row>
      ))}
    </Container>
  )
}

export default Favourites
