import React, {useState} from "react";
import SweetAlert2 from "react-sweetalert2";
import Swal from "sweetalert2";

// npm i react-sweetalert2
export default function Alert(){
    const [swalProps, setSwalProps] = useState({});
    const [showalert, setShowalert] = useState(false);
    function handlerClick({target}) {
        console.log(`target: ${target}`);
        setSwalProps({
            show: target,
            title: "Example",
            text: "Hello world!",
            icon: "success",
            confirmButtonText: "Cool",
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-danger"
            }
        })
    }
    const handlerAlertClick = () => {
        Swal.fire("Hello bro!")
    }
    const handlerConfirmClick = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else if (result.dismiss === Swal.DismissReason.cancel){
                Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
            }
        })
    }
    const handlerPromptClick = () => {
        Swal.fire({
            title: "Enter your name",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Save",
            showLoaderOnConfirm: true,
            inputValidator: (value) => {
                if (!value) {
                    return "You need to enter a name!";
                }
            }
            // preConfirm: (login) => {
            //     return fetch(`//api.github.com/users/${login}`)
            //     .then(response => {
            //         if (!response.ok) {
            //             throw new Error(response.statusText)
            //         }
            //         return response.json()
            //     })
            //     .catch(error => {
            //         Swal.showValidationMessage(`Request failed: ${error}`)
            //     })
            // },
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(`Hello ${result.value}!`);
            }
        })
    }
    const handlerSuccessClick = () => {
        Swal.fire('Success', 'Your action has been completed', 'success');
    }
    const handlerErrorClick = () => {
        Swal.fire('Error', 'Something went wrong', 'error');
    }
    const handlerWarningClick = () => {
        Swal.fire('Warning', 'Something went wrong', 'warning');
    }
    const handlerInfoClick = () => {
        Swal.fire('Info', 'This is an infomative message', 'info');
    }
    const handlerQuestionClick = () => {
        Swal.fire('Question', 'Are you sure', 'question');
    }
    return (
        <div>
            <button onClick={handlerAlertClick}>Alert Dialog</button>
            <button onClick={handlerConfirmClick}>Confrim Dialog</button>
            <button onClick={handlerPromptClick}>Prompt Dialog</button>
            <button onClick={handlerSuccessClick}>Success Dialog</button>
            <button onClick={handlerErrorClick}>Error Dialog</button>
            <button onClick={handlerWarningClick}>Warning Dialog</button>
            <button onClick={handlerInfoClick}>Info Dialog</button>
            <button onClick={handlerQuestionClick}>Question Dialog</button>
            <button onClick={() => handlerClick({target:showalert})}>
                Alert
            </button>  
            <SweetAlert2 {...swalProps}
                didOpen={() => {
                    // run when swal is opened...
                }}
                didClose={() => {
                    // run when swal is closed...
                }}
                onConfirm={result => {
                    // run when clieked in confirm and promise is resolved...
                }}
                onError={error => {
                    // run when promise rejected...
                }}
                onResolve={result => {
                    // run when promise is resolved...
                }}
            />
        </div>
    );
}