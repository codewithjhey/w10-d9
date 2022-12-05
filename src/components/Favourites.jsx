import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem
} from "react-bootstrap"
import { useSelector } from "react-redux"
import { FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

const Favourites = () => {
  const dispatch = useDispatch()
  const favouriteTray = useSelector((state) => state.favourite.companies)

  return (
    <div>
      <Container>
        <h1 className="text-center mb-2">Favourite Jobs</h1>
        {favouriteTray.length === 0 && (
          <Row className="text-center">
            <Col>
              <h2 className="display-5">No Saved Job!</h2>
            </Col>
          </Row>
        )}
      </Container>

      <Container>
        <ListGroup>
          {favouriteTray.map((jobs) => {
            return (
              <ListGroupItem key={jobs._id}>
                <Row className="-flex justify-content-between">
                  <Col xs={4}>
                    <Link to={`/${jobs.company_name}`}>
                      {jobs.company_name}
                    </Link>
                  </Col>
                  <Col xs={6}>
                    <p> {jobs.title}</p>
                    <p>{jobs.category}</p>
                    <p>{jobs.candidate_required_location}</p>
                  </Col>
                  <Col xs={2}>
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
                  </Col>
                </Row>
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </Container>
    </div>
  )
}

export default Favourites
