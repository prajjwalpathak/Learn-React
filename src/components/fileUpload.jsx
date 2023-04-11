import { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
	const UPLOAD_ENDPOINT =
		'https://electronics-dated-personal-bbc.trycloudflare.com/admin/upload-user-details';

	const [file, setFile] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('csvFile', file);
		const resp = await axios.post(UPLOAD_ENDPOINT, formData);
		alert(resp.data.message);
		console.log(resp.data.message);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>React File Upload</h1>
			<input type='file' onChange={(e) => setFile(e.target.files[0])} />
			<button type='submit' disabled={!file}>
				Upload File
			</button>
		</form>
	);
};

export default FileUpload;
