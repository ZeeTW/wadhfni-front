import React, { useState } from "react"

const ServiceForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        duration: "",
        status: ""
    }
)

const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
    ...formData,
    [name]: value,
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
        title: "",
        price: "",
        description: "",
        duration: "",
        status: ""
        }
    )
}


return (

    <div>
<h3>Fill In Your Service Form</h3>
    <div>
        <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="title">Title:</label>
        <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        />
    </div>

    <div>
        <label htmlFor="price">Price:</label>
        <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
        />
    </div>

    <div>
        <label htmlFor="description">Description:</label>
        <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        />
    </div>

    <div>
        <label htmlFor="duration">Duration:</label>
        <input
        type="text"
        id="duration"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        required
        />
    </div>

    <div>
        <label htmlFor="status">Status:</label>
        <input
        type="text"
        id="status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        required
        />
    </div>

    <button type="submit">Submit</button>
    </form>
</div>
</div>
)

}

export default ServiceForm