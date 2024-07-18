import { useAuth0 } from '@auth0/auth0-react';
import { SiteMetadata, AllMarkdownRemark, } from '../type';
import Layout from '../layout';
import FaQClass from '../models/faq';
import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';

import * as S from '../styles/adminStyle';

type AdminProps = {
    data: {
        site: { siteMetadata: SiteMetadata };
        allMarkdownRemark: AllMarkdownRemark;
    };
    location: Location;

}

const Admin: React.FC<AdminProps> = ({ location, data }) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileContent, setFileContent] = useState('');
    const [newContent, setNewContent] = useState('');

    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const AllMarkDown = data?.allMarkdownRemark.edges.map(({ node }) => node);


    useEffect(() => {
        if (selectedFile) {
            // // 파일 내용을 가져오기 (여기서는 axios를 사용)
            // axios.get(`/path-to-your-markdown-files/${selectedFile}`).then(response => {
            //     setFileContent(response.data);
            //     setNewContent(response.data);
            // });
        }
    }, [selectedFile]);

    const handleSave = () => {
        // axios.post(`/path-to-your-markdown-files/${selectedFile}`, { content: newContent }).then(() => {
        //     alert('파일이 저장되었습니다.');
        // });
    }
    // if (!isAuthenticated) {
    //     loginWithRedirect();
    //     return <div>Loading...</div>;
    // }

    // if (user && user.email !== 'admin@example.com') {
    //     return <div>Access Denied</div>;
    // }

    return (
        <Layout location={location}>
            {/* <h1>Admin Page</h1> */}

            <S.TabWrapper>
                <S.Tabs>
                    ㅎㅇ
                </S.Tabs>

                <S.PostCardsWrapper>
                </S.PostCardsWrapper>
            </S.TabWrapper>
        </Layout >
    )
}
export default Admin;

