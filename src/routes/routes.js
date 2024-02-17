import { Route } from "react-router-dom";
import Home from "../components/home/home";
import Blog from "../components/blog/blog";
import MainLayout from "../components/layout/main-layout";


export const renderRoutes = () => {

    return (
        <>
            <Route path="/justanotherpage" element={
                <MainLayout>
                    <Home />
                </MainLayout>} />
            <Route path="blog" element={
                <MainLayout>
                    <Blog />
                </MainLayout>
            } />

        </>
    );

}