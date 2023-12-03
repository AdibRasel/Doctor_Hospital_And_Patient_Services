// import React, { useEffect, useRef, useState } from 'react';
// import { useHistory } from 'react-router';
// import { LoginRequest } from '../../apiService/UserAPIService';
import { NavLink } from 'react-router-dom';
// import { UserLogin } from "../../apiService/UserService.js"

// import { Toaster } from 'react-hot-toast';

// import "./Test.css"
import "../../Template/TemplateOne/TemplateOnce.css"
import { useEffect } from 'react';

const Login_Cmpt = () => {
//     const EmailRef = useRef<HTMLInputElement>(null);
//     const PasswordRef = useRef<HTMLInputElement>(null);
//     const history = useHistory();

//     // Add state to track validation errors
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const [UserError, SetUserError] = useState("");

//     // Function to clear the error message when the user starts typing
//     const handleEmailChange = () => {
//         setEmailError('');
//     };

//     const handlePasswordChange = () => {
//         setPasswordError('');
//     };

//     // Login Button
//     const LoginButton = () => {
//         // Reset validation errors
//         setEmailError('');
//         setPasswordError('');

//         if (EmailRef.current && PasswordRef.current) {
//             const Email = EmailRef.current.value;
//             const Password = PasswordRef.current.value;


//             let PostBody = {
//                 email: Email,
//                 password: Password,
//             };

//             // Check if email and password are not empty
//             if (!Email) {
//                 setEmailError('Email is required');
//             } else if (!Password) {
//                 setPasswordError('Password is required');
//             } else {
//                 UserLogin(PostBody).then((Res) => {
//                     if (Res.data.json_data == null) {
//                         SetUserError("Incorrect Email OR Password")
//                     } else if (Res.data.msg == "success") {
//                         console.log("Success")
//                         SetUserError(" ")
//                         localStorage.setItem('ID', Res.data.json_data.id)
//                         localStorage.setItem('FullName', Res.data.json_data.full_name)
//                         localStorage.setItem('Email', Res.data.json_data.email)
//                         localStorage.setItem('Mobile', Res.data.json_data.mobile)
//                         localStorage.setItem('DateOfBirth', Res.data.json_data.dob)
//                         localStorage.setItem('Image', Res.data.json_data.signature_image)
//                         history.push('/home');
//                     } else {
//                         SetUserError("Server error please try again later!")
//                     }
//                 });
//             }
//         }
//     };


  if("aa" == "aa"){


    useEffect(() => {
        const c = document.getElementById('c');
        let w = (c.width = window.innerWidth);
        let h = (c.height = window.innerHeight);
        const ctx = c.getContext('2d');

        const minDist = 10;
        const maxDist = 30;
        const initialWidth = 10;
        const maxLines = 50;
        const initialLines = 4;
        const speed = 5;

        let lines = [];
        let frame = 0;
        let timeSinceLast = 0;

        const dirs = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
            [0.7, 0.7],
            [0.7, -0.7],
            [-0.7, 0.7],
            [-0.7, -0.7],
        ];

        const starter = {
            x: w / 2,
            y: h / 2,
            vx: 0,
            vy: 0,
            width: initialWidth,
        };

        function init() {
            lines = [];
            for (let i = 0; i < initialLines; ++i) lines.push(new Line(starter));
            ctx.fillStyle = '#222';
            ctx.fillRect(0, 0, w, h);
        }

        function getColor(x) {
            return `hsl( ${x / w * 360 + frame}, 80%, 50% )`;
        }

        function anim() {
            window.requestAnimationFrame(anim);
            ++frame;
            ctx.shadowBlur = 0;
            ctx.fillStyle = 'rgba(0,0,0,.02)';
            ctx.fillRect(0, 0, w, h);
            ctx.shadowBlur = 0.5;

            for (let i = 0; i < lines.length; ++i)
                if (lines[i].step()) {
                    lines.splice(i, 1);
                    --i;
                }

            ++timeSinceLast;

            if (lines.length < maxLines && timeSinceLast > 10 && Math.random() < 0.5) {
                timeSinceLast = 0;
                lines.push(new Line(starter));
                ctx.fillStyle = ctx.shadowColor = getColor(starter.x);
                ctx.beginPath();
                ctx.arc(starter.x, starter.y, initialWidth, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function Line(parent) {
            this.x = parent.x | 0;
            this.y = parent.y | 0;
            this.width = parent.width / 1.25;

            do {
                const dir = dirs[(Math.random() * dirs.length) | 0];
                this.vx = dir[0];
                this.vy = dir[1];
            } while (
                (this.vx === -parent.vx && this.vy === -parent.vy) ||
                (this.vx === parent.vx && this.vy === parent.vy)
            );

            this.vx *= speed;
            this.vy *= speed;

            this.dist = Math.random() * (maxDist - minDist) + minDist;
        }

        Line.prototype.step = function () {
            let dead = false;

            const prevX = this.x;
            const prevY = this.y;

            this.x += this.vx;
            this.y += this.vy;

            --this.dist;

            if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) dead = true;

            if (this.dist <= 0 && this.width > 1) {
                this.dist = Math.random() * (maxDist - minDist) + minDist;

                if (lines.length < maxLines) lines.push(new Line(this));
                if (lines.length < maxLines && Math.random() < 0.5) lines.push(new Line(this));

                if (Math.random() < 0.2) dead = true;
            }

            ctx.strokeStyle = ctx.shadowColor = getColor(this.x);
            ctx.beginPath();
            ctx.lineWidth = this.width;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(prevX, prevY);
            ctx.stroke();

            if (dead) return true;
        };

        init();
        anim();

        window.addEventListener('resize', function () {
            w = c.width = window.innerWidth;
            h = c.height = window.innerHeight;
            starter.x = w / 2;
            starter.y = h / 2;

            init();
        });
    }, []);



  }else{
    
  }



const HandalFrom =(e)=>{
    e.preventDefault();
}











    return (
        < >



            <div>
                <div style={{ margin: '0px' }}>
                    <canvas id='c' width="1366" height="641"></canvas>
                    <div className="login-form">
                        {/* <form onSubmit={HandalFrom}> */}
                        <form>
                            <p style={{ textAlign: 'center' }}>
                                {/* <a href="https://atik.urbanitsolution.com/" className="text-center"> */}
                                    <img
                                        src="https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo"
                                        alt="logo"
                                        style={{ width: '80px' }}
                                        className='rounded-lg'
                                    />
                                {/* </a> */}
                            </p>

                            <h2 className="font-weight-bold" style={{ textAlign: 'center' }}>
                                HR-Allowance
                            </h2>
                            <h5 className="text-dark" style={{ textAlign: 'center', margin: '0px' }}>
                                {/* <span>School Management System</span> */}
                            </h5>
                            <p className="text-center text-dark"><small>
                                Dear user, log in to access the admin area!</small></p>






                            <div className="form-group log-status">
                                <input
                                    type="email"
                                    // ref={EmailRef}
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email Address"
                                    required
                                />
                                <i className="fa fa-user"></i>
                            </div>
                            <div className="form-group log-status">
                                <input
                                    type="password"
                                    // ref={PasswordRef}
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    required
                                />
                                <i className="fa fa-lock"></i>
                            </div>

                            <div className="text-center bold">
                                {/* <span>{UserError}</span> */}
                                <span>{}</span>
                            </div>


                            <div className="d-flex py-1">
                                <div className="">
                                    <NavLink to="/ForgotPasswordEmailOrNumber" className="">
                                        Forgot Password?
                                    </NavLink>
                                </div>
                                <div className="ms-auto">
                                    <NavLink to="/registration" className="">
                                        Register Now
                                    </NavLink>
                                </div>
                            </div>


                            {/* <input type="submit" name="login" className="log-btn" value="Log In" /> */}
                            <div className="form-button-group transparent d-grid gap-2 mt-4 bg-white">
                                {/* <button onClick={LoginButton} type="submit" className="btn btn-primary btn-block"> */}
                                <button type="submit" className="btn btn-primary btn-block">
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>


                </div>
                {/* <Toaster /> */}
            </div>



        </>
    );
};

export default Login_Cmpt;
