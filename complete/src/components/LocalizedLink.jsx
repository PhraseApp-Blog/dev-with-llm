import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const LocalizedLink = ({ to, ...props }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return <Link to={`/${lang}${to}`} {...props} />;
};

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default LocalizedLink;
