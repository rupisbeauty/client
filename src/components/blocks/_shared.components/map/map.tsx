import { Box } from '@chakra-ui/react';
import type { FC } from 'react';


export const Map: FC<{
  address: string;
  width?: string[] | number[] | string | number;
  height?: string[] | number[] | string | number;
}> = ({ address, width = '425', height = '175' }) => {
  const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.503726987067!2d-74.02374918409099!3d41.05798057929579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e898f74aa2a5:0x5658071016061c67!2s${address}!5e0!3m2!1sen!2sus!4v1668374942594!5m2!1sen!2sus`;

  return (
    <Box
      title="google-map"
      as="iframe"
      src={url}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;
