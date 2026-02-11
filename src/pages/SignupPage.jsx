import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchRoles } from "../store/actions/clientActions";
import api from "../api/axios";

export default function SignupPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { roles } = useSelector(state => state.client);
  const [isLoading, setIsLoading] = useState(false);
  const [isStore, setIsStore] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const password = watch("password");

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      let payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: Number(data.role_id),
      };

      if (isStore) {
        payload.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.tax_no,
          bank_account: data.bank_account,
        };
      }

      await api.post("/signup", payload);
      toast.success("Kayıt başarılı! E-posta linkini tıklayın.");
      history.goBack() || history.push("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Kayıt başarısız.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Kayıt Ol</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
            <input
              type="text"
              {...register("name", { required: "Zorunlu", minLength: { value: 3, message: "En az 3 karakter" } })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">E-posta</label>
            <input
              type="email"
              {...register("email", { required: "Zorunlu", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Geçersiz" } })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Şifre</label>
            <input
              type="password"
              {...register("password", { required: "Zorunlu", minLength: { value: 8, message: "En az 8 karakter" } })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Şifre Tekrar</label>
            <input
              type="password"
              {...register("passwordConfirm", {
                required: "Zorunlu",
                validate: value => value === password || "Eşleşmiyor"
              })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
            {errors.passwordConfirm && <p className="text-red-600 text-sm mt-1">{errors.passwordConfirm.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rol</label>
            <select
              {...register("role_id", { required: "Zorunlu" })}
              onChange={(e) => setIsStore(e.target.value === "store_role_id")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            >
              <option value="">Seçiniz</option>
              {roles.map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
            {errors.role_id && <p className="text-red-600 text-sm mt-1">{errors.role_id.message}</p>}
          </div>

          {isStore && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mağaza Adı</label>
                <input
                  type="text"
                  {...register("store_name", { required: "Zorunlu", minLength: { value: 3, message: "En az 3 karakter" } })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
                {errors.store_name && <p className="text-red-600 text-sm mt-1">{errors.store_name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Telefon</label>
                <input
                  type="text"
                  {...register("store_phone", { required: "Zorunlu" })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
                {errors.store_phone && <p className="text-red-600 text-sm mt-1">{errors.store_phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Vergi No</label>
                <input
                  type="text"
                  {...register("tax_no", { required: "Zorunlu" })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
                {errors.tax_no && <p className="text-red-600 text-sm mt-1">{errors.tax_no.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">IBAN</label>
                <input
                  type="text"
                  {...register("bank_account", { required: "Zorunlu" })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
                {errors.bank_account && <p className="text-red-600 text-sm mt-1">{errors.bank_account.message}</p>}
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50"
          >
            {isLoading ? "Kaydediliyor..." : "Kayıt Ol"}
          </button>
        </form>
      </div>
    </div>
  );
}