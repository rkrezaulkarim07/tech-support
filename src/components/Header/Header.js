import AOS from 'aos'
import 'aos/dist/aos.css'
import Typical from 'react-typical'

AOS.init({ duration: 10000 })

const Header = () => {
  return (
    <div>
      <div className="row d-flex">
        <div className="col-md-6 text-center m-auto">
          <h1>
            We are providing the best
            <Typical
              steps={['service to our clients.', 'offers to our clients.']}
              loop={Infinity}
              wrapper="p"
            />
          </h1>
          <h5>
            Lorem ipsum dolor sit, amet
            <Typical
              steps={[
                'ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'hamkg juelo sit amet.',
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h5>
        </div>
        <div data-aos="slide-down" className="col-md-6">
          <img
            style={{ width: '100%' }}
            src="https://i.ibb.co/JRK8Wpw/undraw-Add-tasks-re-s5yj.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Header
