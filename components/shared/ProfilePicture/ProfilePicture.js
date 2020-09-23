import { useEffect, useRef } from "react"
import anime from "animejs"

import { Container, Picture } from "./styles"

const ProfilePicture = ({ className }) => {
  const blobMorph = useRef(null)
  const morphValues = [
    "M96.8564207,6.57151303 C105.102107,13.5879768 107.233015,27.9951157 109.363923,42.2151489 C111.494831,56.3416292 113.718387,70.187451 110.01246,84.2203785 C106.213885,98.253306 96.5784762,112.473339 84.1636223,115.373478 C71.7487683,118.367169 56.6471176,110.040965 42.7498931,102.930949 C28.8526685,95.8209319 16.15987,89.9271024 8.28477612,79.6362889 C0.409682191,69.2519225 -2.64770722,54.4705722 2.63323812,43.992653 C7.8215353,33.6082867 21.4408154,27.6209043 32.3732987,21.0722048 C43.2131339,14.5235053 51.4588205,7.41348868 62.8545446,3.67137468 C74.1576206,-0.0707393227 88.6107342,-0.538503573 96.8564207,6.57151303 Z",
    "M94.1778269,22.4576632 C101.552661,32.4444181 107.160608,40.6642857 107.698357,48.9609744 C108.236105,57.2576632 103.703655,65.6311731 100.553986,78.6139545 C97.4811382,91.596736 95.9447143,109.035147 88.0321315,113.798061 C80.1963699,118.637796 66.1380918,110.648392 51.1579594,105.194087 C36.1778269,99.6629612 20.2758401,96.7437559 11.6718666,86.9874645 C3.06789313,77.3079943 1.76193286,60.9450804 7.44670107,48.6536896 C13.1314693,36.4391201 25.806966,28.4497161 37.1765024,19.1543519 C48.5460388,9.85898766 58.6864362,-0.588694458 68.2890852,0.0258750786 C77.814913,0.717265807 86.8798137,12.4709082 94.1778269,22.4576632 Z",
    "M98.265,11.9625 C106.675,21.895 108.415,36.9025 107.11,49.59 C105.8775,62.2775 101.6725,72.5 95.7275,80.91 C89.855,89.32 82.2425,95.9175 72.02,103.1675 C61.725,110.4175 48.7475,118.32 39.975,114.985 C31.2025,111.65 26.7075,97.0775 19.0225,84.1 C11.41,71.195 0.6075,59.885 3.7975,52.7075 C7.06,45.53 24.315,42.485 35.915,33.1325 C47.515,23.78 53.5325,8.12 64.1175,2.6825 C74.7025,-2.755 89.7825,2.03 98.265,11.9625 Z",
    "M93.4101167,13.3926428 C102.957768,20.80125 109.160257,34.0750045 111.111602,47.966143 C113.062947,61.7801084 110.763148,76.2114578 104.560659,88.3276175 C98.3581697,100.443777 88.3226819,110.167574 77.6599762,111.711034 C67.0669613,113.254494 55.7770375,106.617616 46.0203133,100.52095 C36.1938981,94.4242838 27.9006825,88.7906554 19.1893216,79.7614154 C10.5476516,70.7321754 1.48783621,58.2301508 1.13938177,45.1107423 C0.790927338,32.0685067 9.08414294,18.4088872 20.0256123,11.308972 C30.9670816,4.20905682 44.5568046,3.59167289 57.7980732,4.05471084 C71.0393419,4.51774879 83.932156,6.06120862 93.4101167,13.3926428 Z",
    "M96.8564207,6.57151303 C105.102107,13.5879768 107.233015,27.9951157 109.363923,42.2151489 C111.494831,56.3416292 113.718387,70.187451 110.01246,84.2203785 C106.213885,98.253306 96.5784762,112.473339 84.1636223,115.373478 C71.7487683,118.367169 56.6471176,110.040965 42.7498931,102.930949 C28.8526685,95.8209319 16.15987,89.9271024 8.28477612,79.6362889 C0.409682191,69.2519225 -2.64770722,54.4705722 2.63323812,43.992653 C7.8215353,33.6082867 21.4408154,27.6209043 32.3732987,21.0722048 C43.2131339,14.5235053 51.4588205,7.41348868 62.8545446,3.67137468 C74.1576206,-0.0707393227 88.6107342,-0.538503573 96.8564207,6.57151303 Z",
  ]

  useEffect(() => {
    anime({
      targets: blobMorph.current,
      easing: "easeInOutSine",
      duration: 12000,
      elasticity: 200,
      direction: "alternate",
      loop: true,
      d: morphValues.map((value) => ({
        value: value,
      })),
    })

    return () => {
      anime.remove(blobMorph.current)
    }
  }, [])

  return (
    <Container className={className}>
      <Picture src="/nicolas_thiry.png" alt="Memoji of Nicolas Thiry" />
      <svg width="116" height="116" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path ref={blobMorph} d={morphValues[0]} fill="currentColor" fillRule="nonzero" />
        </g>
      </svg>
    </Container>
  )
}

export { ProfilePicture }
