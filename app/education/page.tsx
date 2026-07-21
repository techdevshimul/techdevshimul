import EducationCertificationsAndAchievements from "@/components/education/EducationCertificationsAndAchievments";
import EducationHero from "@/components/education/EducationHero";
import EducationTimeline from "@/components/education/EducationTimeline";

export default function Education() {
  return (
    <main className="pt-32 pb-stack-lg">
      <EducationHero />
      <EducationTimeline />
      <EducationCertificationsAndAchievements />
    </main>
  );
}
