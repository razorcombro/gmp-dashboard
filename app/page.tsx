import { prisma } from "@/lib/db/prisma";

export default async function HomePage() {
  const [products, tasks, orders, campaigns] = await Promise.all([
    prisma.product.count(),
    prisma.optimizationTask.count(),
    prisma.order.count(),
    prisma.campaign.count(),
  ]);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">GMP Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Produk" value={products} />
        <Card title="Task" value={tasks} />
        <Card title="Order" value={orders} />
        <Card title="Campaign" value={campaigns} />
      </div>
    </main>
  );
}

function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
      <div className="text-sm text-zinc-400">{title}</div>
      <div className="text-3xl font-bold mt-2">{value}</div>
    </div>
  );
}
