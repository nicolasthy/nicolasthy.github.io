import { Container, Picture } from "./styles"

const ProfilePicture = () => {
  return (
    <Container>
      <Picture src="/nicolas_thiry.png" />
      <svg width="112" height="116" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M96.856 6.072c8.246 7.016 10.377 21.423 12.508 35.643 2.13 14.127 4.354 27.972.648 42.005-3.798 14.033-13.434 28.253-25.848 31.153-12.415 2.994-27.517-5.332-41.414-12.442-13.897-7.11-26.59-13.004-34.465-23.295C.41 68.752-2.648 53.971 2.633 43.493c5.189-10.385 18.808-16.372 29.74-22.92 10.84-6.55 19.086-13.66 30.482-17.402 11.303-3.742 25.756-4.21 34.001 2.9z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </svg>
    </Container>
  )
}

export { ProfilePicture }
