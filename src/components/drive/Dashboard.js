import React from 'react';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import AddFolder from './AddFolder';
import { useFolder } from '../../hooks/useFolder';
import Folder from './Folder';
import { useParams, useLocation } from 'react-router-dom';
import FolderBreadcrumbs from './FolderBreadcrumbs';
import AddFile from './AddFile';
import File from './File';

export default function Dashboard() {
	const { folderId } = useParams();
	const { state = {} } = useLocation();
	const { folder, childFolders, childFiles } = useFolder(
		folderId,
		state.folder
	);
	// console.log(childFolders);

	// const fold = folder ? folder : '';
	return (
		<>
			<Navbar />
			<Container fluid>
				<div className='d-flex align-items-center'>
					<FolderBreadcrumbs currentFolder={folder} />
					<AddFile currentFolder={folder} />
					<AddFolder currentFolder={folder} />
				</div>
				{/* CHILD FOLDERS */}
				<h2>Folder name is: </h2>
				{childFolders.length > 0 && (
					<div className='d-flex flex-wrap'>
						{' '}
						{childFolders.map((childFolder) => (
							<div
								key={childFolder.id}
								style={{ maxWidth: '250px' }}
								className='p-2'
							>
								{' '}
								<Folder folder={childFolder} />
							</div>
						))}
					</div>
				)}
				{childFolders.length > 0 && childFiles.length > 0 && <hr />}
				{/* CHILD FILES */}
				{childFiles.length > 0 && (
					<div className='d-flex flex-wrap'>
						{' '}
						{childFiles.map((childFile) => (
							<div
								key={childFile.id}
								style={{ maxWidth: '250px' }}
								className='p-2'
							>
								{' '}
								<File file={childFile} />
							</div>
						))}
					</div>
				)}
			</Container>
		</>
	);
}
