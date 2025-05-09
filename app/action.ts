'use server'

export const action = async (formData: FormData) => {
  const file = formData.get("file") as File;
  return { name: file.name, size: file.size };
};
