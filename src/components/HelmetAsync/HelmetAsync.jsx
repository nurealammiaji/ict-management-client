import { Helmet } from 'react-helmet-async';

const HelmetAsync = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || ICT Management</title>
      <link rel="canonical" href="https://www.ictmanagement.com/" />
    </Helmet>
  )
}

export default HelmetAsync