import { useForm } from "../hooks/useForm"

interface FormData {
    email: string,
    password: string
}

export const Formularios = () => {

    const initFormData: FormData = {
        email: 'test@test.com',
        password: '123456'  
    }

    const { formState, handleChange } = useForm<FormData>(initFormData)

    const { email, password } = formState


    return <>
        <h3>Formularios</h3>
        <input 
            type="text"
            value={ email }
            className="form-control" 
            onChange={ ({ target: { value } }) => handleChange('email', value ) }
            placeholder="Email"
        />
        <input 
            type="password"
            value={ password }
            className="form-control mt-2 mb-2" 
            onChange={ ({ target: { value } }) => handleChange('password', value ) }
            placeholder="Password"
        />

        <code>
            <pre>
                { JSON.stringify( formState, null, 2 ) }
            </pre>
        </code>

    </>
}
