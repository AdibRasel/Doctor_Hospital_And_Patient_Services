import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Registration_Cmpt = () => {
  const [value, onChange] = useState<Value>(new Date());
  console.log(value)






  // HospitalLogo privew code start 
  const [HospitalLogo, setHospitalLogo] = useState(null);
  
  const handleHospitalLogoInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();


      reader.onloadend = () => {
        // Set the base64 HospitalLogo data in state
        // setBase64HospitalLogo(reader.result);
        // Store the selected HospitalLogo file
        // setSelectedHospitalLogo(file);
      };


      reader.onload = (event) => {
        setHospitalLogo(event.target.result);
      };


      reader.readAsDataURL(file);
    }
  };
  // HospitalLogo privew code end






  // Background animation start
  if ("RaselHossainAdib" == "RaselHossainAdib") {
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
  } else {
  }
  // Background animation end

  return (<>

    <div className="" style={{ margin: '0px' }}>


      <canvas id='c' width="1366" height="641"></canvas>
      <div style={{ backgroundColor: 'rgb(255 255 255 / 85%)'}} className="container mt-3 login-form p-0">

        <div className="row shadow rounded p-4">

          <div className="col-md-3">

            <div className="d-flex justify-content-center align-items-center">
              {HospitalLogo && (
                <img
                  src={HospitalLogo}
                  alt="Logo"
                  style={{ width: '200px', height: '100px' }}
                  className="img-fluid rounded mb-1"
                />
              )}
            </div>

            <img className="img-fluid rounded" src="https://i.ibb.co/njNpPPF/pexels-jonathan-borba-3259624.jpg" alt="" />

            <Form.Group>
              <Form.Label className='mt-2'>Hospital Logo</Form.Label>
              <Form.Control  onChange={handleHospitalLogoInputChange} type="file" />
            </Form.Group>


          </div>


          <div className="col-md-9">

            <div className="row">

              <div className="col-md-6">
                <Form>
                  <Form.Group className="mb-1">
                    <Form.Label className='fw-bold m-0 p-0'>Hospital Name:</Form.Label>
                    <Form.Control  type="text" placeholder="Hospital Name" />
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <Form.Label className='fw-bold m-0 p-0'>How many total employees are there in the hospital:</Form.Label>
                    <Form.Control  style={{ width: '200px' }} type="number" placeholder="Total Employees" />
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <Form.Label className='fw-bold m-0 p-0'>Hospital Address line 1:</Form.Label>
                    <Form.Control  type="text" placeholder="Address" />
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <Form.Label className='fw-bold m-0 p-0'>Phon Number:</Form.Label>
                    <Form.Control  type="number" placeholder="Phon Number" />
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <Form.Label className='fw-bold m-0 p-0'>Email Address:</Form.Label>
                    <Form.Control  type="email" placeholder="Email Address" />
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <Form.Label className='fw-bold m-0 p-0'>Password:</Form.Label>
                    <Form.Control  type="password" placeholder="Password" />
                  </Form.Group>

                </Form>
              </div>


              <div className="col-md-6">
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label className='fw-bold mb-3'>Hospital start date:</Form.Label>
                    {/* <Form.Control  type="text" placeholder="Hospital start date" /> */}
                    <br />
                    <DateTimePicker onChange={onChange} value={value} />
                  </Form.Group>


                  <Form.Group className="mb-1">
                    <Form.Label className='fw-bold m-0 p-0'>How many doctors are there in the hospital?:</Form.Label>
                    <Form.Control  style={{ width: '150px' }} type="number" placeholder="Total Doctors" />
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <Form.Label className='fw-bold m-0 p-0'>Hospital Address line 2:</Form.Label>
                    <Form.Control  type="text" placeholder="Address" />
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <Form.Label className='fw-bold m-0 p-0'>Phon Number:</Form.Label>
                    <Form.Control  type="number" placeholder="Phon Number" />
                  </Form.Group>

                  <Form.Group className="mb-1">
                    <Form.Label className='fw-bold m-0 p-0'>Email Address:</Form.Label>
                    <Form.Control  type="email" placeholder="Email Address" />
                  </Form.Group>


                  <Form.Group className="mb-1">
                    <Form.Label className='fw-bold m-0 p-0'>Confirm Password:</Form.Label>
                    <Form.Control  type="password" placeholder="Confirm Password" />
                  </Form.Group>

                </Form>
              </div>

              <div className="d-grid gap-2">
                <Button variant="primary">
                  Submit
                </Button>
              </div>

            </div>

          </div>

        </div>




      </div>
















    </div>


  </>)
}

export default Registration_Cmpt