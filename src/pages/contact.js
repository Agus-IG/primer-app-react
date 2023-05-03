import React from 'react'

function Contacts() {
    return (
        <>
            <div class="m-3">
                <h3 class="mb-5">Formulario de contacto</h3>
                <form class="col g-3 needs-validation" novalidate>
                    <div class="col-md-2 mb-2">
                        <label for="validationCustom01" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="validationCustom01" required />
                        <div class="valid-feedback">
                            Se ve bien!
                        </div>
                    </div>
                    <div class="col-md-2 mb-2">
                        <label for="validationCustom02" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Se ve bien!
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <label for="validationCustomUsername" class="form-label">Correo electronico</label>
                        <div class="input-group has-validation">
                            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Por favor escriba un correo.
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                        <div class="input-group has-validation">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required ></textarea>
                            <div class="invalid-feedback">
                                Por favor escriba un mensaje.
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contacts;