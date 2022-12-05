import { Row, Col, Button, Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { MdFavorite } from "react-icons/md"

const Job = ({ data }) => {
  const dispatch = useDispatch()

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
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
    </Row>
  )
}
export default Job
