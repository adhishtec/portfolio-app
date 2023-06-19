import {TextField,FormLabel,Button} from '@mui/material';
import '../../src/ui/login.scss'
import {getUserData} from '../../src/data/dataProvider'

function Login(){
    function login(){
        getUserData()
    }
    return (
        <>
       <div className='loginform'>
                 <TextField
                    id="outlined-required"
                    label="Username"
                />
                  <TextField
                    id="outlined-required"
                    label="Password"
                />
                <Button variant="contained" onClick={login}>Contained</Button>
        </div>
        </>
    )
}

export default Login