<%-- 
    Document   : getResult
    Created on : Feb 16, 2022, 12:37:55 PM
    Author     : asus
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
          <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                    <title>Result Page</title>
          </head>
          <body style="text-align: center">
                    <h1>Your Result</h1>
                    <h2>Result page</h2>
                    <%
                             String value = request.getParameter("txt");
                             out.print("Student's name: "  + value + "<br>" + "<br>");
                             String value1 = request.getParameter("id");
                             out.print("Student's ID: " + value1 + "<br>" + "<br>");
                             String value2 = request.getParameter("email");
                             out.print("Student's maiil: " + value2 + "<br>" + "<br>");
                             String value3 = request.getParameter("gender");
                             out.print("Student's gender:  " + value3 + "<br>"+ "<br>" );
                             String value5 = request.getParameter("major");
                             out.print("Student's major: " + value5 + "<br>" + "<br>");
                             String value6 = request.getParameter("contact");
                             out.print("Student's contact with F0: " + value6 + "<br>"+ "<br>" );
                    %>
          </body>
</html>
