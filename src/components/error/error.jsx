import "../error/error.scss"
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<div className="error">
			<p className="error__Number">404</p>
			<p className="error__Text">Oups! La page que <br className="error__line"/> vous demandez n'existe pas.</p>
			<Link to="/" className="error__LinkHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}

export default  ErrorPage;