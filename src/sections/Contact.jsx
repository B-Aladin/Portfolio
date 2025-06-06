import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
const Contact = () => {
    const formRef= useRef();
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''}
    )
    const handleChange = ({target:{name,value}}) => {
        setForm({...form,[name]:value})
    }
    const handleSubmit= async  (e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            await emailjs.send("service_2j2cqje","template_i50y3eg",
                {
                    from_name:form.name,
                    to_name:"Benahmed Aladin",
                    from_email:form.email,
                    to_email:"benahmed.ala.eddine@hns-re2sd.dz",
                    message:form.message
                },"Ar4SqdOgGkWDdlTKk");
            setLoading(false);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you. I will get back to you as soon as possible.',
                confirmButtonColor: '#4F46E5'
            });            setForm({
                name:'',
                email:'',
                message:'',
            });
        }catch (error) {
            setLoading(false);
            console.log(error)
            alert("something went wrong?")
        }

    }
    return (
        <section className={"c-space my-20"}>
            <div className={"relative min-h-screen flex items-center justify-center flex-col"}>
                <img src={"/assets/terminal.png"} alt={"terminal background"} className={"absolute inset-0 min-h-screen hidden sm:block"}/>
                <div className={"contact-container"}>
                    <h3 className={"head-text mt-6  "}>Let's talk</h3>
                    <p className={"text-l text-white-600 mt-3"}>Whether you're aiming to develop sustainable energy solutions, enhance technical projects, or organize impactful scientific events, I'm here to help.I turn ideas into successful and meaningful results.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className={"mt-12 flex flex-col space-y-7"}>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Full Name</span>
                            <input type={"text"} name={"name"} value={form.name} onChange={handleChange} required
                                   className={"field-input"} placeholder={"Benahmed Aladin"}/>
                        </label>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Email</span>
                            <input type={"email"} name={"email"} value={form.email} onChange={handleChange} required
                                   className={"field-input"} placeholder={"benahmed.ala.eddine@hns-re2sd.dz"}/>
                        </label>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Your message</span>
                            <textarea  name={"message"} value={form.message} onChange={handleChange} required rows={5}
                                   className={"field-input"} placeholder={"Hi, I'm interested in..."}/>
                        </label>
                        <button className={"field-btn"} type={"submit"} disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                            <img src={"/assets/arrow-up.png"} alt={"arrow-up"} className={"field-btn_arrow"}/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
