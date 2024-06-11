
document.addEventListener('DOMContentLoaded', () => {
    
    //Evento Post para registrarse
    const form = document.querySelector('form');
    console.log(form)

    //Evento sumbit del boton registrar
    if (form){

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            
           
            const email = form.querySelector('#email').value;
            const nombre = form.querySelector('#nombre').value;
            const password = form.querySelector('#password').value;
            const confirmPassword = form.querySelector('#confirmPassword').value;
            const anos_experiencia = form.querySelector('#anos_experiencia').value;
            const especialidad = form.querySelector('#especialidad').value;
            const foto = form.querySelector('#foto').files[0]; 
    
            // Validar que las contraseñas coincidan
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
    
            // Crear un objeto FormData para enviar los datos
            const formData = new FormData();
            formData.append('email', email);
            formData.append('nombre', nombre);
            formData.append('password', password);
            formData.append('anos_experiencia', anos_experiencia);
            formData.append('especialidad', especialidad);
            formData.append('foto', foto);
    
            try {
               
                const response = await axios.post('/registro', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
    
                
                if (response.status === 200) {                
                    alert('¡Registro exitoso!');
                    window.location.href = '/login'; 
                } else {
                    
                    alert(`Error: ${response.data.error}`);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Ocurrió un error durante el registro. Por favor, intenta nuevamente.');
            }
        });
    }



//Solicitud POST para loguearse 

    const formLogin = document.getElementById('loginForm');
    console.log(formLogin)
    //Evento submit del boton Ingresar
    if (formLogin) {
       
            formLogin.addEventListener('submit', async (event) => {
                event.preventDefault();
        
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                //console.log(email, password)
                
        
                try {
                    const response = await axios.post('/login', { email, password });
                   // console.log('response del login',response)
        
                    if (response.status === 200) {
                        
                        const { token, skeater } = response.data;
                        console.log(skeater.rol)
                        sessionStorage.setItem('token', token);
                        alert('Login exitoso!');
                        if (skeater.rol =='Usuario'){
                            window.location.href = `/perfil?token=${token}`; 
                        }else{
                            window.location.href = `/admin?token=${token}`
                        }
                    } else {
                        alert('Error de autenticación');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Ocurrió un error durante el inicio de sesión. Por favor, intenta nuevamente.');
                }
            });
        
    }

 //Solicitut Put para editar el perfil del skater   
 const botonActualizar = document.getElementById('botonActualizar');
console.log(botonActualizar);
//Evento Click del boton actualizar
if (botonActualizar) {
    botonActualizar.addEventListener('click', async (event) => {
        console.log('Se hizo clic en el botón de actualizar');
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const password = document.getElementById('password').value;
        const confirmarPassword = document.getElementById('confirmPassword').value;
        const anos_experiencia = document.getElementById('anos_experiencia').value;
        const especialidad = document.getElementById('especialidad').value;

       

        if (password !== confirmarPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const token = sessionStorage.getItem('token');

        try {
            const response = await axios.put(`/perfil?token=${token}`, {
                nombre,
                password,           
                anos_experiencia,
                especialidad
            });

            if (response.status === 200) {
                alert('Perfil actualizado exitosamente!');
                window.location.reload(); 
            } else {
                alert('Error al actualizar el perfil');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al actualizar el perfil. Por favor, intenta nuevamente.');
        }
    });
}

//Solicitud Delete para eliminar perfil
const botonEliminar = document.getElementById('botonEliminar');
    console.log(botonEliminar);

    // Evento click del botón eliminar
    if (botonEliminar) {
        botonEliminar.addEventListener('click', async (event) => {
            console.log('Se hizo clic en el botón de eliminar');
            event.preventDefault();

            const token = sessionStorage.getItem('token');

            try {
                const response = await axios.delete(`/perfil?token=${token}`);

                if (response.status === 200) {
                    alert('Perfil eliminado exitosamente!');
                    sessionStorage.removeItem('token');
                    window.location.href = '/'; 
                } else {
                    alert('Error al eliminar el perfil');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Ocurrió un error al eliminar el perfil. Por favor, intenta nuevamente.');
            }
        });
    }

     // Evento para el cambio de estado del skater
     const checkBoxes = document.querySelectorAll('.estadoCheckbox');

     checkBoxes.forEach(checkBox => {
         checkBox.addEventListener('change', async (event) => {
             const checkBox = event.target;
             const skaterId = checkBox.getAttribute('dataId');
             const estado = checkBox.checked;

             console.log('salida del Front',skaterId)
            
             const token = sessionStorage.getItem('token')
 
             try {
                 const response = await axios.put(`/admin/${skaterId}?token=${token}`, { estado });
 
                 if (response.status === 200) {
                     alert('Estado actualizado exitosamente!');
                 } else {
                     alert('Error al actualizar el estado');
                 }
             } catch (error) {
                 console.error('Error:', error);
                 alert('Ocurrió un error al actualizar el estado. Por favor, intenta nuevamente.');
             }
         });
     });
 



});