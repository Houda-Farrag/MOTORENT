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
  
  const RecviedMessagesUser = () => {
  
      const form = useForm({
         
      })
      const {register,formState}=form
      const {errors}=formState
   return (
      <>
      <Stack sx={{m:2,p:2,borderRadius:"10px",backgroundColor: '#ffffff',
       
        border:"1px solid #3563E9" , }}>
        <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
              fontSize:"20px",
              fontWeight:700,
              font:"Plus Jakarta Sans",
              fontStyle:"bold",
              }} >
        Messages
        </Typography>
     
        <form noValidate>
        <Grid container spacing={2}>
       
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Name</FormLabel>
              <OutlinedInput
                id="input-firstName-user-info"
                placeholder="First Name"
                type="text"
                {...register('title',)}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
               
  
              />
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Your Message</FormLabel>
              <OutlinedInput
                id="input-lastName-user-info"
                placeholder=""
                type="text"
                multiline
                rows={4}
                {...register('body',)}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
  
              />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
          <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Your Attachment</FormLabel>
            <OutlinedInput
                id="input-attachments-user-info"
                placeholder=" your message here please!"
                type="file"
                accepet=".pdf,.doc,.docx"
                {...register('attachments',{required:{value:true,
              message:"This Filed is required"}})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
          

      
            </Grid>
            <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Reply</FormLabel>
              <OutlinedInput
                id="input-lastName-user-info"
                placeholder="!"
                type="text"
                multiline
                rows={4}
                {...register('reply')}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
  
              />
            </FormControl>
          </Grid>
          </Grid>

          </form>
         </Stack> 
         </>)
          }
          export default RecviedMessagesUser;
          // please nora do not forget to remove validtion//