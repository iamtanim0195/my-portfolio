import { saveAs } from 'file-saver';

const Resume = () => {
    const handleDownload = () => {
        // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
        const pdfPath = '/Scic-Ass-2.pdf';

        console.log('Attempting to download file from path:', pdfPath);
        // Trigger the download
        saveAs(pdfPath, 'Sahadat_Hossen_Tanim_Resume.pdf');
    };
    return (
        <div id="resume">
            <div className="bg-slate-950 mt-5 overflow-hidden shadow rounded-lg border">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-white">
                        <span className="text-pink-600">R</span>ESUME
                    </h3>
                    <p>
                        <button className="btn btn-primary" onClick={handleDownload}>
                            Download Resume
                        </button>
                    </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                                Md. Sahadat Hossen Tanim
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                                sahadatmd195@gmail.com
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                                bangladesh dhaka munshiganj gojariya
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Resume;
