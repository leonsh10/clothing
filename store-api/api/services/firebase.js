import admin from 'firebase-admin';

import  serviceAccount  from '../../credentials/store-c8fe7-firebase-adminsdk-ne2kw-3d8bcbe59c.json';


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export default admin;