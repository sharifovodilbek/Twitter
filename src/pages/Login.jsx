import { LogoIcon } from '../assets/icons'
import Input from '../components/Input'
import Button from '../components/Button'
import { useContext } from 'react'
import { Context } from '../context/Context'

const Login = () => {
  const { setToken } = useContext(Context)

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      email: e.target.login.value,
      password: e.target.password.value
    }
    e.target.children[1].textContent = "Loading..."
    if (data.email == "asadbek@gmail.com" && data.password == "1234") {
      setTimeout(() => setToken(data), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <LogoIcon />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">Log in to Twitter</h1>
        </div>
        <form onSubmit={handleSubmit} autoComplete='off' className="space-y-6">
          <div className="flex flex-col space-y-4">
            <Input name={'login'} type={'email'} placeholder={'Phone number, email address'} />
            <Input name={"password"} type={'password'} placeholder={'Password'} />
          </div>
          <Button type={"submit"} title={"Log In"} />
        </form>
      </div>
    </div>
  )
}

export default Login