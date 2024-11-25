import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

const ConsumerForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !mobile || !selectedProduct) {
            setError("All fields are required.");
            return;
        }

        const consumerData = { name, email, mobile, selectedProduct };


        axios.post('http://localhost:8080/ConsumerController/Insert', consumerData)
            .then(response => {
                console.log(response.data);
                setSuccessMessage("Form submitted successfully!");
                setName("");
                setEmail("");
                setMobile("");
                setSelectedProduct("");
                setError("");
            })
            .catch(error => {
                console.error("Error submitting the form:", error);
                setError("Failed to submit the form. Please try again.");
            });
    };

    return (
        <Form className="responsive-border" onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="mobile">Mobile Number</Label>
                <Input
                    type="tel"
                    id="mobile"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="select">Interested in products</Label>
                <Input
                    type="select"
                    id="select"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                >
                    <option value="">SELECT ANY PRODUCTS</option>
                    <option value="CHIKU">CHIKU</option>
                    <option value="CUSTARD APPLE">CUSTARD APPLE</option>
                    <option value="ABU GATTA">ABU GATTA</option>
                    <option value="PAAN">PAAN</option>
                    <option value="CHOCO VANNILA">CHOCO VANNILA</option>
                    <option value="BUTTER SCOTCH">BUTTER SCOTCH</option>
                    <option value="CULKHAND ANJEER">CULKHAND ANJEER</option>
                    <option value="CASSATA">CASSATA</option>
                    <option value="HONEY NUT">HONEY NUT</option>
                    <option value="CAKE CASSATA">CAKE CASSATA</option>
                    <option value="REAL ORANGE">REAL ORANGE</option>
                    <option value="RAJASTHANI GULFI">RAJASTHANI GULFI</option>
                    <option value="VANNILA">VANNILA</option>
                    <option value="STRAWBERRY">STRAWBERRY</option>
                    <option value="BLACK CURRENT">BLACK CURRENT</option>
                    <option value="MATKA KULFI">MATKA KULFI</option>
                    <option value="GOLDEN CHERRY">GOLDEN CHERRY</option>
                    <option value="KESAR PISTA MALAI">KESAR PISTA MALAI</option>
                    <option value="KESAR PISTA KULFI">KESAR PISTA KULFI</option>
                    <option value="ALL">ALL</option>
                    {/* Other options */}
                </Input>
            </FormGroup>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            <Button className="send">Submit</Button>
        </Form>
    );
};

export default ConsumerForm;
