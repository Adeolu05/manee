import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { SplashPage } from "../pages/SplashPage";
import { OnboardingPage } from "../pages/OnboardingPage";
import { SignupPage } from "../pages/SignupPage";
import { LoginPage } from "../pages/LoginPage";
import { VerifyPage } from "../pages/VerifyPage";
import { SuccessPage } from "../pages/SuccessPage";
import { HomePage } from "../pages/HomePage";
import { ChatPage } from "../pages/ChatPage";
import { GroupPage } from "../pages/GroupPage";
import { DappExplorePage } from "../pages/DappExplorePage";
import { InviteFriendsPage } from "../pages/InviteFriendsPage";
import { ProfilePage } from "../pages/ProfilePage";
import { TxSuccessPage } from "../pages/TxSuccessPage";

export const router = createBrowserRouter([
    { path: "/", element: <SplashPage /> },
    { path: "/onboarding", element: <OnboardingPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/verify", element: <VerifyPage /> },
    { path: "/success", element: <SuccessPage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/chat", element: <ChatPage /> },
    { path: "/group", element: <GroupPage /> },
    { path: "/dapp", element: <DappExplorePage /> },
    { path: "/invite", element: <InviteFriendsPage /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/tx-success", element: <TxSuccessPage /> },
]);
