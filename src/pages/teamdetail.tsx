import { Navigate, useParams } from "react-router-dom";

import Header from "@/components/Header";
import TeamInnerPage from "@/components/teams/TeamInnerPage";
import { teamMembers } from "@/data/teamMembers";
import Footer from "@/components/Footer";

export default function TeamDetail() {
  const { id } = useParams<{ id: string }>();

  const member = teamMembers.find((item) => item.id === id);

  if (!member) {
    return <Navigate to="/corporate-profile" replace />;
  }

  return (
    <>
      <Header />

      <TeamInnerPage member={member} />

      <Footer />
    </>
  );
}
