using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace ApiPontosTuristicos.Services
{
    public class DBConnection
    {
        private readonly string _connectionString;

        public DBConnection()
        {
            var host = Environment.GetEnvironmentVariable("DB_HOST");
            var port = Environment.GetEnvironmentVariable("DB_PORT");
            var database = Environment.GetEnvironmentVariable("DB_DATABASE");
            var user = Environment.GetEnvironmentVariable("DB_USER");
            var password = Environment.GetEnvironmentVariable("DB_PASSWORD");

            _connectionString = $"Server={host};Database={database};Integrated Security=True;Encrypt=False;";
            // _connectionString = $"server={host};port={port};database={database};user={user};password={password};";

        }

        public object Execute(string query, SqlParameter[] parameters = null)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    connection.Open();

                    using (var command = new SqlCommand(query, connection))
                    {
                        if (parameters != null)
                        {
                            command.Parameters.AddRange(parameters);
                        }

                        // Verifica se a consulta é uma execução de procedure
                        if (command.CommandText.StartsWith("EXEC", StringComparison.OrdinalIgnoreCase) ||
                            command.CommandText.StartsWith("EXECUTE", StringComparison.OrdinalIgnoreCase))
                        {
                            using (var reader = command.ExecuteReader())
                            {
                                var results = new List<Dictionary<string, object>>();

                                while (reader.Read())
                                {
                                    var row = new Dictionary<string, object>();
                                    for (int i = 0; i < reader.FieldCount; i++)
                                    {
                                        row[reader.GetName(i)] = reader.GetValue(i);
                                    }
                                    results.Add(row);
                                }

                                return results;
                            }
                        }

                        return false;
                    }
                }
            }
            catch (SqlException ex)
            {
                Console.WriteLine($"Erro ao executar a consulta: {ex.Message}");
                throw;
            }
        }
    }
}
