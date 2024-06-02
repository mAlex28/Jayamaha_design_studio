import React, { useEffect, useState } from "react"
import { MDBDataTableV5 } from "mdbreact"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Spinner from "react-bootstrap/Spinner"
import Col from "react-bootstrap/esm/Col"
import Modal from "react-bootstrap/Modal"
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/esm/Container"
import Alert from "react-bootstrap/Alert"
import { useNavigate } from "react-router-dom"
import FileBase64 from "react-file-base64"
import moment from "moment"
import { FaEdit, FaTrash } from "react-icons/fa"

import {
  createProject,
  fetchProjects,
  deleteProjects,
  updateProjects,
  fetchProject,
} from "../../../api"

const initialProjectData = {
  name: "",
  projectDate: "",
  description: "",
  projectImage: [],
  location: "",
}

const Projects = () => {
  const [form, setForm] = useState(initialProjectData)
  const [showForm, setShowForm] = useState(false)
  const [showEditForm, setEditShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [datatable, setDatatable] = useState({ columns: [{}], rows: [{}] })
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllProjects = async () => {
      setIsLoading(true)
      const res = await fetchProjects()

      setDatatable({
        columns: [
          {
            label: "Name",
            field: "name",
            width: 150,
            attributes: {
              "aria-controls": "DataTable",
              "aria-label": "Name",
            },
          },
          {
            label: "Date",
            field: "projectDate",
            width: 150,
          },
          {
            label: "Description",
            field: "description",
            sort: "disabled",
            width: 270,
          },
          {
            label: "Image",
            field: "projectImage",
            sort: "disabled",
            width: 200,
          },
          {
            label: "Location",
            field: "location",
            width: 100,
          },
          {
            label: "Edit",
            field: "edit",
            sort: "disabled",
            width: 50,
          },
          {
            label: "Delete",
            field: "delete",
            sort: "disabled",
            width: 50,
          },
        ],
        rows: res.data.data.map((project) => ({
          name: project.name ?? "",
          projectDate: moment(project.projectDate).format("MMMM DD YYYY"),
          description: project.description.substring(0, 250),
          projectImage: (
            <img
              src={project.projectImage[0]}
              style={{
                width: "50px",
                height: "50px",
              }}
              alt={project.name}
            />
          ),
          location: project.location ?? "",
          edit: (
            <Button variant="warning" onClick={() => handleEdit(project._id)}>
              <FaEdit />
            </Button>
          ),
          delete: (
            <Button variant="danger" onClick={() => handleDelete(project._id)}>
              <FaTrash />
            </Button>
          ),
        })),
      })

      setIsLoading(false)
    }

    fetchAllProjects()
  }, [])

  const refetchAllProjects = async () => {
    setIsLoading(true)
    const res = await fetchProjects()

    setDatatable({
      columns: [
        {
          label: "Name",
          field: "name",
          width: 150,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "Name",
          },
        },
        {
          label: "Date",
          field: "projectDate",
          width: 150,
        },
        {
          label: "Description",
          field: "description",
          sort: "disabled",
          width: 270,
        },
        {
          label: "Image",
          field: "projectImage",
          sort: "disabled",
          width: 200,
        },
        {
          label: "Location",
          field: "location",
          width: 100,
        },
        {
          label: "Edit",
          field: "edit",
          sort: "disabled",
          width: 50,
        },
        {
          label: "Delete",
          field: "delete",
          sort: "disabled",
          width: 50,
        },
      ],
      rows: res.data.data.map((project) => ({
        name: project.name ?? "",
        projectDate: moment(project.projectDate).format("MMMM DD YYYY"),
        description: project.description.substring(0, 250),
        projectImage: (
          <img
            src={project.projectImage[0]}
            style={{
              width: "50px",
              height: "50px",
            }}
            alt={project.name}
          />
        ),
        location: project.location ?? "",
        edit: (
          <Button variant="warning" onClick={() => handleEdit(project._id)}>
            <FaEdit />
          </Button>
        ),
        delete: (
          <Button variant="danger" onClick={() => handleDelete(project._id)}>
            <FaTrash />
          </Button>
        ),
      })),
    })

    setIsLoading(false)
  }

  const handleShowForm = () => setShowForm(true)
  const handleCloseForm = () => setShowForm(false)

  const handleEditCloseForm = () => setEditShowForm(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      await createProject(form)

      setShowForm(false)
      await refetchAllProjects()

      setIsLoading(false)
    } catch (err) {
      setError(true)
      setErrorMessage(err.response.data.message)
      console.log(err)
    }

    clear()
    navigate("/dashboard")
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()

    try {
      const updatedProject = {
        name: form.name,
        projectDate: form.projectDate,
        description: form.description,
        projectImage: form.projectImage,
        location: form.location,
      }
      setIsLoading(true)
      await updateProjects(form.id, updatedProject)

      setEditShowForm(false)
      await refetchAllProjects()

      setIsLoading(false)
    } catch (err) {
      setError(true)
      setErrorMessage(err.response.data.message)
      console.log(err)
    }

    clear()
    navigate("/dashboard")
  }

  const clear = () => {
    setForm({
      name: "",
      projectDate: "",
      description: "",
      projectImage: [],
      location: "",
    })
  }

  const handleMultipleImages = (file) => {
    setForm({
      ...form,
      projectImage: [
        ...form.projectImage,
        ...file.map((item) => {
          return item.base64
        }),
      ],
    })
  }

  const handleEdit = async (e) => {
    try {
      const res = await fetchProject(e)
      setForm({
        ...form,
        id: res.data._id,
        name: res.data.name,
        projectDate: res.data.projectDate,
        description: res.data.description,
        projectImage: res.data.projectImage,
        location: res.data.location,
      })
      setEditShowForm(true)
    } catch (err) {
      setError(true)
      setErrorMessage(err)
      console.log(err)
    }
  }

  const handleDelete = async (e) => {
    try {
      setIsLoading(true)
      await deleteProjects(e)
      await refetchAllProjects()
      setIsLoading(false)
    } catch (err) {
      setError(true)
      setErrorMessage(err)
      console.log(err)
    }
  }

  return (
    <>
      <Container>
        {error && <Alert variant="danger">{errorMessage}</Alert>}
        <div
          className="add-project-container"
          style={{
            paddingBottom: "20px",
          }}
        >
          <Button variant="primary" onClick={handleShowForm}>
            Add Project
          </Button>
        </div>

        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <MDBDataTableV5
            responsive
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
            searchTop
            searchBottom={false}
          />
        )}

        <Modal show={showForm} onHide={handleCloseForm}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Add Project</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Row>
                    <Col>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        onChange={handleChange}
                        defaultValue={form.name}
                        name="name"
                        type="text"
                        placeholder="Project Name"
                        className="form-control"
                      />
                    </Col>
                    <Col>
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        required
                        onChange={handleChange}
                        defaultValue={form.date}
                        name="projectDate"
                        type="date"
                        className="form-control"
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        required
                        onChange={handleChange}
                        defaultValue={form.location}
                        name="location"
                        type="text"
                        placeholder="Project Location"
                        className="form-control"
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        required
                        onChange={handleChange}
                        defaultValue={form.description}
                        name="description"
                        as="textarea"
                        rows={3}
                        placeholder="Write a description about your project.."
                        className="form-control"
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <FileBase64
                        multiple={true}
                        onDone={(file) => handleMultipleImages(file)}
                      />
                    </Col>
                  </Row>
                </Form.Group>

                <Stack direction="horizontal" gap={3}>
                  <div className="ms-auto">
                    <Button variant="light" type="reset" onClick={clear}>
                      Clear
                    </Button>
                  </div>
                  <div className="">
                    <Button
                      style={{
                        paddingRight: "10px",
                      }}
                      variant="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Stack>
              </Form>
            </Row>
          </Modal.Body>
        </Modal>

        <Modal show={showEditForm} onHide={handleEditCloseForm}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Edit Project</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form onSubmit={handleEditSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Row>
                    <Col style={{ display: "none" }}>
                      <Form.Label visuallyHidden={true}>ID</Form.Label>
                      <Form.Control
                        required
                        readOnly
                        hidden
                        value={form.id}
                        name="id"
                        type="text"
                        className="form-control"
                      />
                    </Col>

                    <Col>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        onChange={handleChange}
                        defaultValue={form.name}
                        name="name"
                        type="text"
                        placeholder="Project Name"
                        className="form-control"
                      />
                    </Col>
                    <Col>
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        defaultValue={form.date}
                        name="projectDate"
                        type="date"
                        className="form-control"
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        required
                        onChange={handleChange}
                        defaultValue={form.location}
                        name="location"
                        type="text"
                        placeholder="Project Location"
                        className="form-control"
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        required
                        onChange={handleChange}
                        defaultValue={form.description}
                        name="description"
                        as="textarea"
                        rows={3}
                        placeholder="Write a description about your project.."
                        className="form-control"
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <FileBase64
                        multiple={true}
                        onDone={(file) => handleMultipleImages(file)}
                      />
                    </Col>
                  </Row>
                </Form.Group>

                <Stack direction="horizontal" gap={3}>
                  <div className="ms-auto">
                    <Button variant="light" type="reset" onClick={clear}>
                      Clear
                    </Button>
                  </div>
                  <div className="">
                    <Button
                      style={{
                        paddingRight: "10px",
                      }}
                      variant="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Stack>
              </Form>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  )
}

export default Projects
