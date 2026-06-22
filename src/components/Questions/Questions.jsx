import { useState } from "react"
import TextareaAutosize from "react-textarea-autosize"
import "./Questions.css"

export default function Questions() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Form submitted successfully: ", formData)

        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    }

    return (
        <section className="form-container">
            <form onSubmit={handleSubmit} className="details-form">
                <h2>SUBMIT QUERY</h2>

                <br />

                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    placeholder="Enter Full Name"
                    id="name" name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required    
                />

                <br />

                <label htmlFor="email">Email ID</label>
                <input
                    type="email"
                    placeholder="Enter Email ID"
                    id="email" name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <br />

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    id="phone" name="phone"
                    value={formData.phone}   
                    onChange={handleChange}
                    required
                />

                <br />

                <label htmlFor="message">Message</label>
                <TextareaAutosize
                    name="message" id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={10}
                    cols={100}
                    placeholder="Enter Message"
                    required
                />

                <br />

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </section>
    )
}