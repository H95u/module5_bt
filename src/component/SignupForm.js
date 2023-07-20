import * as Yup from 'yup'
import {useFormik} from "formik";


export default function SignupForm() {

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirm: "",
            email: ""
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Không được để trống').min(6, "Phải có ít nhất 6 ký tự"),
            password: Yup.string().required("Không được để trống").matches(/^[A-Z]{1}[a-z]{5}/, "Mật khẩu không hợp lệ"),
            email: Yup.string().required("Không được để trống").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không hợp lệ"),
            confirm: Yup.string().required("Không được để trống").oneOf([Yup.ref("password"), null],
                "Mật khẩu phải trùng nhau")
        }),

    })

    return (
        <section>
            <h1>Đăng ký</h1>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type={"text"}
                    id={"username"}
                    name={"username"}
                    placeholder={'Tên đăng nhập'}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                /><br/>
                {formik.errors.username && (
                    <p>{formik.errors.username}</p>
                )}
                <input
                    type={"text"}
                    id={"password"}
                    name={"password"}
                    placeholder={'Mật khẩu'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                /><br/>
                {formik.errors.password && (
                    <p>{formik.errors.password}</p>
                )}
                <input
                    type={"text"}
                    id={"confirm"}
                    name={"confirm"}
                    placeholder={'Nhập lại mật khẩu'}
                    value={formik.values.confirm}
                    onChange={formik.handleChange}
                /><br/>
                {formik.errors.confirm && (
                    <p>{formik.errors.confirm}</p>
                )}
                <input
                    type={"text"}
                    id={"email"}
                    name={"email"}
                    placeholder={'Email'}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                /><br/>
                {formik.errors.email && (
                    <p>{formik.errors.email}</p>
                )}
                <button type={"submit"}>Đăng ký</button>
            </form>
        </section>
    )
}