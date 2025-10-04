export function GET({ params }) {
  const { id } = params;

  return {
    id: id,
    name: "Go to gym 💪",
    frequency: 6,
    completionDays: [
      1759548603646, // UTC
      1759548603940,
    ]
  }
}