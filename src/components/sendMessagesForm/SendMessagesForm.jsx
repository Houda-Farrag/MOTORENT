import {
    Typography,
    FormHelperText,
    FormControl,
    FormLabel,
    OutlinedInput,
    Grid,
    Stack,Button,} from "@mui/material";
  import SendIcon from '@mui/icons-material/Send';

  import {useForm,} from 'react-hook-form'
  
  const UserSendMessageForm = () => {
  
      const form = useForm({
          mode:"all"
      })
      const {register,formState,handleSubmit}=form
      const {errors}=formState
   return (
      <>
      <Stack sx={{m:2,p:2,borderRadius:"10px"}}>
        <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
              fontSize:"20px",
              fontWeight:700,
              font:"Plus Jakarta Sans",
              fontStyle:"bold",
              }} >
        Have a question?
        </Typography>
        <FormHelperText>Please fill out this form 
            if you have a question or problem.We look forward to providing
             you with the best service and our friendly team is always here to chat
</FormHelperText>
        <form noValidate>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Email</FormLabel>
              <OutlinedInput
                id="input-email-user-info"
                placeholder="Email"
                type="email"
                {...register('email',{required:{value:true,
              message:"This Filed is required"},pattern:{value:/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,message:"Invalid email"
              }})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.email?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>First Name</FormLabel>
              <OutlinedInput
                id="input-firstName-user-info"
                placeholder="First Name"
                type="text"
                {...register('firstName',{required:{value:true,
              message:"This Filed is required"},maxLength:{value:40,message:"name is too long, maxium 40 letters"
              
              
          },minLength:{value:3,message:"name is too short, minum 3 letters"}})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.firstName?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Last Name</FormLabel>
              <OutlinedInput
                id="input-lastName-user-info"
                placeholder="Last Name"
                type="text"
                {...register('lastName',{required:{value:true,
              message:"This Filed is required"},maxLength:{value:40,message:"name is too long, maxium 40 letters"
              
              
          },minLength:{value:3,message:"name is too short, minum 3 letters"}})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.lastName?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Message</FormLabel>
              <OutlinedInput
                id="input-lastName-user-info"
                placeholder="Entre your message here please!"
                type="text"
                multiline
                rows={4}
                {...register('message',{required:{value:true,
              message:"This Filed is required"},maxLength:{value:100,message:"message is too long, maxium 40 letters"
              
              
          },minLength:{value:3,message:"Message is too short, minum 3 letters"}})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.message?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <OutlinedInput
                id="input-lastName-user-info"
                placeholder="Entre your message here please!"
                type="file"
                accepet=".pdf,.doc,.docx"
                {...register('picture',{required:{value:true,
              message:"This Filed is required"}})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
          

      
            </Grid>
            <Grid item sm={6}>
            <Button size="large" sx={{mt:3,font:"Plus Jakarta Sans",
      fontWeight:600,}} type="submit" variant="contained" onSubmit={handleSubmit} endIcon={<SendIcon />}>Send
</Button>
            </Grid>
          </Grid>

          </form>
         </Stack> 
         </>)
          }
          export default UserSendMessageForm;