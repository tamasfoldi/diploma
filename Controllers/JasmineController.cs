using System;
using System.Web.Mvc;

namespace DiplomaMunka.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
