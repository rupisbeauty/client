export const Map = ({
  width = '425',
  height = '175',
}: {
  width?: string | number;
  height?: string | number;
}) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.503726987067!2d-74.02374918409099!3d41.05798057929579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e898f74aa2a5%3A0x5658071016061c67!2s2a%20Franklin%20Ave%2C%20Pearl%20River%2C%20NY%2010965!5e0!3m2!1sen!2sus!4v1668374942594!5m2!1sen!2sus"
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
