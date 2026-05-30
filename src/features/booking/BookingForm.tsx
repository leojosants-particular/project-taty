import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { bookingSchema, buildBookingMessage, type BookingForm as BookingValues } from "@/lib/booking-schema"
import { buildWhatsAppLink } from "@/lib/whatsapp"
import { site } from "@/content/site"

export function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", service: "beleza", preference: "" },
  })

  function onSubmit(data: BookingValues) {
    const url = buildWhatsAppLink({ phone: site.whatsapp, message: buildBookingMessage(data) })
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto grid max-w-md gap-4" noValidate>
      <div className="grid gap-1.5 text-left">
        <Label htmlFor="name">Seu nome</Label>
        <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>

      <div className="grid gap-1.5 text-left">
        <Label htmlFor="service">Serviço</Label>
        <select
          id="service"
          {...register("service")}
          className="h-9 rounded-md border border-input bg-transparent px-3 text-sm"
        >
          <option value="beleza">Beleza (unhas)</option>
          <option value="confeitaria">Confeitaria (doces)</option>
        </select>
        {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
      </div>

      <div className="grid gap-1.5 text-left">
        <Label htmlFor="preference">Preferência de data/horário</Label>
        <Input id="preference" {...register("preference")} aria-invalid={!!errors.preference} />
        {errors.preference && <p className="text-sm text-destructive">{errors.preference.message}</p>}
      </div>

      <Button type="submit" size="lg">Enviar pelo WhatsApp</Button>
    </form>
  )
}
