import React, {useState} from  'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario = () => {
    const[formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return(
        <>
            <Formik   
                initialValues={{
                    identificacion:'',
                    nombre:'',
                    apellidos:'',
                    tel:'',
                    habitacion:'',
                    id_rh:'0'
                }}             
                validate={(valores) => {
                    let errores ={};
                    //Validacion Identificacion
                    if(!valores.identificacion){
                        errores.identificacion = 'Por favor ingresa una identificacion'  
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,5}$/.test(valores.identificacion)){
                        errores.identificacion ='La identificación solo puede tener letras';
                    }
                    //Validacion Nombre
                    if(!valores.nombre){
                        errores.nombre = 'Por favor ingresa un nombre'  
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre ='El nombre solo puede tener letras y espacios';
                    }
                    //Validacion Apellidos
                    if(!valores.apellidos){
                        errores.apellidos = 'Por favor ingresa tus apellidos'  
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,60}$/.test(valores.apellidos)){
                        errores.nombre ='Los apellidos solo puede tener letras y espacios';
                    }
                    //Validacion Telefono
                    if(!valores.tel){
                        errores.tel = 'Por favor ingresa un teléfono'  
                    } else if(!/^[0-9]{10}$/.test(valores.tel)){
                        errores.nombre ='El teléfono solo puede tener números';
                    }
                    //Validar Habitación
                    if(!valores.habitacion){
                        errores.habitacion = 'Por favor ingresa una habitación'  
                    } else if(!/^[0-9]{5}$/.test(valores.habitacion)){
                        errores.habitacion ='La habitación solo puede tener números';
                    }
                    //Validar RH
                    if (!valores.id_rh) {
                        errores.id_rh = 'Por favor selecciona una opción';
                    } else if (valores.id_rh === "0") {
                        errores.id_rh = 'Por favor selecciona una opción válida';
                    }

                    return errores;
                }}
                onSubmit={(valores, {resetForm}) =>{
                    resetForm();
                    console.log('Formulario Enviado')
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 4000) 
                }}
            >
                {({ errors}) => (
                    <Form className='formulario'>
                        <h1>REGISTRO HOTEL</h1>
                        <div id="row">
                            <div class="col-25">
                                <label htmlFor="identificacion">Indentificación:</label>
                            </div>
                            <div class="col-75">    
                                <Field type="text" id="identificacion" name="identificacion"/>
                                <ErrorMessage name="identificacion" component={() => <div className='error'>{errors.identificacion}</div>} />
                            </div>
                        </div>
                        <div id="row">
                            <div class="col-25">
                                <label htmlFor="nombre">Nombres:</label>
                            </div>
                            <div class="col-75">
                                <Field type="text" id="nombre" name="nombre"/>
                                <ErrorMessage name="nombre" component={() => <div className='error'>{errors.nombre}</div>}/>
                            </div>
                        </div>
                        <div id="row">
                            <div class="col-25">
                                <label htmlFor="apellidos">Apellidos:</label>
                            </div>
                            <div class="col-75">
                                <Field type="text" id="apellidos" name="apellidos" />
                                <ErrorMessage name="apellidos" component={() => <div className='error'>{errors.apellidos}</div>}/>
                            </div>
                        </div>
                        <div id="row">
                            <div class="col-25">    
                                <label htmlFor="tel">Teléfono:</label>
                            </div>    
                            <div class="col-75">
                                <Field type="tel" id="tel" name="tel" />
                                <ErrorMessage name="tel" component={() => <div className='error'>{errors.tel}</div>}/>
                            </div>
                        </div>
                        <div id="row">
                            <div class="col-25">
                                <label htmlFor="habitacion">Habitación:</label>
                            </div>
                            <div class="col-75">
                                <Field type="text" id="habitacion" name="habitacion" />
                                <ErrorMessage name="habitacion" component={() => <div className='error'>{errors.habitacion}</div>}/>
                            </div>
                        </div>
                        <div id="row">
                            <div class="col-25">
                                <label>RH:</label>
                            </div>
                            <div class="col-75">
                                <Field name="id_rh" as="select">
                                    <option value="0">Seleccione:</option>
                                    <option value="1">A+</option>
                                    <option value="2">A-</option>
                                    <option value="3">B+</option>
                                    <option value="4">B-</option>
                                    <option value="5">AB+</option>
                                    <option value="6">AB-</option>
                                    <option value="7">O+</option>
                                    <option value="8">O-</option>
                                </Field>
                                <ErrorMessage name="id_rh" component={() => <div className='error'>{errors.id_rh}</div>}/>
                            </div>
                        </div>
                        <div id="row">
                            <div class="col-25">
                                <label>Fecha Ingreso:</label>
                                <Field type="date" name="r_fechaIn" id="r_fechaIn"/>
                            </div>
                            <div class="col-26">
                                <label>Fecha Salida:</label>
                                <Field type="date" name="r_fechaSal" id="r_fechaSal"/>
                            </div>
                        </div>
                        <div id="row2">
                            <button class="btn_atras" onclick="irAtras()">&#9666;</button>
                            <button class="btn_adelante" onclick="irAdelante()">&#9656;</button>
                        </div>

                        <div id="row3">
                            <button type="submit">Registrar</button>
                            <button type="reset">Cancelar</button>
                        </div>
                        {formularioEnviado &&<p className='exito'>¡Formulario enviado con exito!</p>}
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default Formulario;