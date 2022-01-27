import { FormGroup } from "@angular/forms";

export function custom(password:string,confirmpassword:string){
return(formgroup:FormGroup)=>{
  const a=formgroup.controls[password];
}
}