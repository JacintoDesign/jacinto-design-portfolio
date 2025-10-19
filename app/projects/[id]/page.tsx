import { notFound } from 'next/navigation';
import { ProjectPage } from '@/components/project-page';
import { projectsData } from '@/lib/projects-data';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Project({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData[id as keyof typeof projectsData];
  
  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}

export function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id,
  }));
}
