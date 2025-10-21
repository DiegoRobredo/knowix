type Job = {
    id: string;
    title: string;
    company: string;
    location?: string;
    remote: boolean;
};

export function filterJobsByText(jobs: Job[], textInput: string, remoteOnly: boolean) {
    const textQueryInput = textInput.trim().toLowerCase();
    return jobs.filter((job) => {
      if (remoteOnly && job.remote) return true;

      if (textQueryInput) {
        const jobLocation = (job.location ?? '').toLowerCase();
        const title = (job.title ?? '').toLowerCase();
        const company = (job.company ?? '').toLowerCase();

        if (
          jobLocation.includes(textQueryInput) || 
          title.includes(textQueryInput) || 
          company.includes(textQueryInput)
        ) {
          return true;
        }
      }

      return false;
    });
}