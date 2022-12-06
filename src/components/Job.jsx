import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { MdFavorite } from "react-icons/md"

const Job = ({ data }) => {
  const dispatch = useDispatch()

  const areJobsError = useSelector((state) => state.jobs.isError)

  return (
    <Container>
      {areJobsError ? (
        <Col xs={12}>
          <Alert variant="danger" className="text-center">
            <h1> Whoopsie, something went wrong 🥲</h1>
          </Alert>
        </Col>
      ) : (
        <Row
          className="mx-0 mt-3 p-3"
          style={{ border: "2px solid #00000033", borderRadius: 4 }}
        >
          <>
            <Col xs={3}>
              <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={7}>
              <a href={data.url} target="_blank" rel="noreferrer">
                {data.title}
              </a>
            </Col>
            <Col xs={2}>
              <Button
                variant="success"
                onClick={() => {
                  dispatch({
                    type: "ADD_COMPANIES",
                    payload: data
                  })
                }}
              >
                <MdFavorite />
              </Button>
            </Col>
          </>
        </Row>
      )}
    </Container>
  )
}
export default Job
